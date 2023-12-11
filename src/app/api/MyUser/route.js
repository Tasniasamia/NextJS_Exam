const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

export const POST = async (req, res) => {
//   try {
    // const reqBody = await req.json();

    const result = new PrismaClient();
    // const dataAll=await result.users.create({
    //   data: {
    //     user_name:"tasnia123",
    //     user_email:"sharin524@gmail.com",
    //     password:"35tasnia",
    //     role:"Student"
    // }
    // });
    const dataAll=await result.users.createMany({
        data: [{
          user_name:"tasnia123",
          user_email:"sharin524@gmail.com",
          password:"35tasnia",
          role:"Student",
          students: {
            create:[{
                user_name:"c-18134",
                
            }]
          }
      },
      {
        user_name:"samia",
        user_email:"samin524@gmail.com",
        password:"35tassaminnia",
        role:"Engineer",
        students: {
            create:[{
                user_name:"c-181344",
                
            }]
          }
    },
    {
        user_name:"Sadia",
        user_email:"sadia@gmail.com",
        password:"FarhanKhan",
        role:"Doctor",
        students: {
            create:[{
                user_name:"c-17300",
                
            }]
          }
    },
    {
        user_name:"Farhan Khan",
        user_email:"sadia@gmail.com",
        password:"FarhanKhan",
        role:"Engineer",
        students: {
            create:[{
                user_name:"c-34023",
                
            }]
          }
    }
    ]
      });
  
    return NextResponse.json({ data: dataAll }, { status: 202 });
//   } catch (error) {
//     return NextResponse.json(error);
//   }
};

export const GET = async (req, res) => {
  return NextResponse.json("Success message for getting data");
};


export const PUT=async(req,res)=>{
    try{
        // const dataAll=await req.json();
        const {searchParams}=new URL(req.url);
        const id=searchParams.get("id");
        const prisma=new PrismaClient();
    
        const dataUpate=await prisma.users.update({
            where:{id:2},
            data:{
                user_name:"arayman",
                user_email:"arayman@gmail.com",
                password:"arnavSingh",
                role:"Dancer"
            }
        })
    return NextResponse.json({data:dataUpate})
        
    }
    
    catch(error){
        return NextResponse.json(error)
    }
}

// {
//     "user_name":"arayman",
//     "user_email":"arayman@gmail.com"
//     "password":"arnavSingh"
//     "role":"Dancer"
// }