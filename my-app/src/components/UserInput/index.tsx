import React from "react";
import { MyContext } from "../../context/MyContext";

class UserInput extends React.Component {
    render() {
        return(
            <MyContext.Consumer>
                {(value) => (
                    <div>
                        <h1>User Input</h1>
                        <ul>
                            {value.users.map((user) => <li key={user}>{user}</li>)}
                        </ul>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}
export default UserInput;