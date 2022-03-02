import React from "react";
import { FormElementsProps, FormElementsState } from "./interface";

export class FormElements extends React.Component<FormElementsProps, FormElementsState> {
    constructor(props: FormElementsProps){
        super(props);

        this.state = {
            inputValue: "test",
            textAreaValue: "textarea",
            selectValue: "guava"
        }
    }
    handleChanfgeRequest = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value, name} = event.currentTarget

        this.setState({
            [name]: value,

        } as unknown as FormElementsState)
    }
    render(){
        const { inputValue, textAreaValue, selectValue} = this.state;
        return(
            <form onSubmit={(event) => event?.preventDefault()}>
                Input: <input defaultValue={inputValue} name="myInput"/><br />
                Text Area: <textarea defaultValue={textAreaValue} name="myTextArea"/><br />
                Select: <select defaultValue={selectValue} name="mySelect">
                <option value="mango">Mango</option>
                <option value="apple">Apple</option>
                <option value="guava">Guava</option>
                </select>
                <br />
                <button>Submit</button>
            </form>
        )
    }
}