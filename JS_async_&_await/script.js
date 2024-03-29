// const maketimeout = (ms)=>{
//     const timeout = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("All Done!")
//         }, ms)
//     })
//     return timeout 
// };
// console.log('program starting...')


// maketimeout(1000).then((result)=>{
//     console.log('from.then', result)
// });
// const fetchstuff = async()=>{
//     const result = await maketimeout(1000);
//     console.log('from async func', result)
// }
// fetchstuff();

// console.log('program comple...');

// Pausing js

// console.log("program starting...");

// const fetchstu = async ()=>{
//     console.log("fetching first set of data...")
//     const result1 = await maketimeout(2000)
//     console.log("fetching second set of data...", result1)
//     const result2 = await maketimeout(2000);
//     const finalresult = await Promise.all([result1,result2])
//     console.log("done fetching data!", finalresult)

// }
// fetchstu()

// console.log("program complete....");

// Return JS

// const fetchData = async ()=>{
//     return ("yahoo")
// };
// const print = fetchData();
// console.log(print);

// print.then((value)=>{
//     console.log(value)
// });

// const usehello = async()=>{

//     const print = await fetchData();
//     console.log(print)
// };
// usehello();

// Error JS

const maketimeout = (ms)=>{
    const timeout = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All Done!")
        }, ms)
    })
    return timeout 
};
const causeerror = async ()=>{
    try{

        const result = await maketimeout(2000);
        console.log(result)
    } catch(error){
        console.log("we are in the erroe case");
        console.error(error)
    }
};
causeerror()