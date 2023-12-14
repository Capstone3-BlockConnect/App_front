import { useState } from "react";
import { getMatchLog } from "../../../api/matchingApi";
import * as styles from "./MatchingLogScreen.style";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import NotifyWithTime from "../../../components/atom/NotifyWithTime";
import { useEffect } from "react";
import { Alert } from "react-native";

const MatchingLogScreen = () => {
  const [logs, setLogs] = useState();

  const { nickName } = useRecoilValue(userState);
  const getLog = async () => {
    const { data, status } = await getMatchLog();

    return data;
  };

  const extractDate = (isoString) => {
    return isoString.split("T")[0];
  };

  useEffect(() => {
    const getLogHandler = async () => {
      const result = await getLog();
      setLogs(result);
    };
    getLogHandler();
  }, []);

  console.log(typeof logs);
  console.log(JSON.stringify(logs));
  return (
    <styles.Container>
      <styles.TitleArea>
        <styles.Title>{nickName}님의 신청기록입니다</styles.Title>
      </styles.TitleArea>
      <styles.LogArea>
        {logs &&
          logs?.matchingRequests.map((element, index) => {
            console.log(element);
            return (
              <styles.Log key={index}>
                <NotifyWithTime
                  lightColor="green"
                  contentText={`${element?.time} 매칭신청`}
                  timeText={extractDate(element?.requestTime)}
                />
              </styles.Log>
            );
          })}
        <NotifyWithTime lightColor="green" />
      </styles.LogArea>
    </styles.Container>
  );
};

export default MatchingLogScreen;
