import { useContext } from "react";
import { Global } from "./GlobalContext";

function Messages() {

    const { messages } = useContext(Global);

    return (
        <div>
            <div className="container">
                <div className="row position-relative">
                    {messages?.map(m => (<div key={m.id} class="alert alert-success position-absolute top-0 start-0 text-center w-100" role="alert">{m.text}</div>))}
                </div>
            </div>
        </div>
    )
}

export default Messages;