const cl = console.log;

const sweetAlert = (msg, icon) => {
    Swal.fire({
        title : msg,
        timer : 2500,
        icon : icon
    })
}

const hrCall = (skill) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 1st Tech Interview`)
            }else{
                reject(`Candidate is doesn't fit for given profile`)
            }
        }, 2500);
    })
} 

const firstTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 2nd Tech Interview`)
            }else{
                reject(`Candidate is very poor in basics`)
            }
        }, 2000);
    })
}

const secondTechInt = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(!error){
                resolve(`Candidate is short listed for 3rd Tech Interview`)
            }else{
                reject(`Candidate is strugling to write code`)
            }
        }, 1500);
    })
}

const managerRound = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = Math.random() >= .5 ? false : true;
            if(error){
                resolve(`Congrats, you are selected`);
            }else{
                reject(`You are rejected`)
            }
        }, 1000);
    })
}

const init = async () => {
    try{
        let res1 = await hrCall()
        cl(res1);
        sweetAlert(res1, 'success')
        let res2 = await firstTechInt()
        cl(res2);
        sweetAlert(res2, 'success')
        let res3 = await secondTechInt()
        cl(res3)
        sweetAlert(res3, 'success')
        let res4 = await managerRound()
        cl(res4)
        sweetAlert(res4, 'success')

        // await hrCall()
        // await firstTechInt()
        // await secondTechInt()
        // await managerRound()

        // sweetAlert(res, 'success')

    }catch(err){
        sweetAlert(err, 'error')
    }
}

init()

// hrCall()
//     .then((res) =>{
//         cl(res)
//     })
//     .catch((err) =>{
//         cl(err)
//     })