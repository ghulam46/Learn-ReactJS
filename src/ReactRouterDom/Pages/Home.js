import { ChangeProfile } from "../../components/ChangeProfile";

export const Home = (props) => {
    return <h1>This is the Home Page, user is {props.username} <ChangeProfile setUsername={props.setUsername} /></h1>
};