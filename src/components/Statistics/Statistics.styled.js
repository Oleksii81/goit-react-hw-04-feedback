import { styled } from "styled-components";

export const StatisticContainerStyle = styled.div`
    width: 300px;
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    .statistic-text{
        font-size: 30px;
        margin: 0;
    }
    .statTitle {
    font-size: 24px;
    }
    .statItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    }
    .statResults {
    display: flex;
    flex-direction: column;
    padding: 0;
    }
    .statValue {
    border: 1px solid #ccc;
    background-color: #fff;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    }
    .messageTitle {
    font-size: 18px;
    color: #555555;
    }
`