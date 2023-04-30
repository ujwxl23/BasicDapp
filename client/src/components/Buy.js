import { ethers } from "ethers";

const Buy =({state})=>{
    
    const buyChai= async(event)=>{// this is the function which will run on clicking submit button 
        event.preventDefault();// prevent to reload on click 
        const{contract}= state; // taking out instance of contract from state
        const name = document.querySelector("#name").value; //fetching the name
        const message= document.querySelector("#message").value;//fetching the value
        console.log(name,message,contract);//putting in console 

        const amount = {value: ethers.utils.parseEther("0.001")}; //set the amount
        const transaction = await contract.buyChai(name,message,amount);//calling buyChai function from contract 
        await transaction.wait(); // wait for transaction to be completed 
        console.log("Transaction is done"); // transaction is done 
    };

    // this is the html part connected to this (buyChai) async function
    return( 
    <>
        <form onSubmit={buyChai}> 
            <label>Name</label>
            <input type="text" id="name" placeholder="Enter your name"></input>
            <label>Message</label>
            <input type="text" id="message" placeholder="Enter your message"></input>
            <button type="submit" disabled={!state.contract}>Pay</button>
        </form>
    </>
    );
};
export default Buy;