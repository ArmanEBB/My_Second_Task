// first part
const ShoeSizeO=()=>{
    const ObjShoe = {shoe1:42,shoe2:43,shoe3:44};

    document.getElementById("EuropeanShoeSizeLBL1").innerText=ObjShoe.shoe1;
    document.getElementById("EuropeanShoeSizeLBL2").innerText=ObjShoe.shoe2;
    document.getElementById("EuropeanShoeSizeLBL3").innerText=ObjShoe.shoe3;

    
}
const ShoeSizeA=()=>{
    const ArrShoe = [30,32,34];
    document.getElementById("EuropeanShoeSizeLBL4").innerText=ArrShoe;

}
// second part:
const repetitive=()=>{
    const repetitiveArray = [1,2,3,3,7,7,3,4,6,76,34,76];
    const specialArray = [...new Set(repetitiveArray)];
}


// third part
const dateOnTop=()=>{
    const exactTime = new Date()
    document.getElementById("exactDate").innerText = exactTime
}


// fourth part
const safePassword=()=>{
    const userEmail = document.getElementById("Pass").value
    const conditions = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(conditions.test(userEmail)){
        document.getElementById("Pass").style.backgroundColor = "green"
    }
    else{
        document.getElementById("Pass").style.backgroundColor = "Red"
        alert("Use capital and small case and numbers!")
    }
}

//fifth part
const alertChange=()=>{
    const alertValue = document.getElementById("onChange").value
    alert(alertValue)
    console.log(alertValue)
}

// sixth part
const onText=()=>{
    document.getElementById("paragraph").style.backgroundColor = "red"
}

const offText=()=>{
    document.getElementById("paragraph").style.backgroundColor = "aqua"
}

// seventh part
const siteEntryAlert=(event)=>{
    if(event.key === "Enter"){
        alert("you've entered the site!")
    }
}