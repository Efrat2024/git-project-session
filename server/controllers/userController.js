const { request } = require("express")
const User = require("../modules/User")
const Vacation = require("../modules/Vacation")
const emailjs = require('emailjs-com');

const mailer = require('../servises/mail');
const mailerTmar=require('../servises/mailTamar')
const globaldeleteShopingcart = async (userId, vacation) => {
    try {
        const user = await User.findById(userId)
        if (!user || !vacation) {
            return ('no user/vacation  like that in delete shoppingCart');
        }
        const id2 = user.shoppingCart.findIndex(item => item.vacations.toString() === vacation._id.toString());
        if (id2 !== -1) {
            user.shoppingCart.splice(id2, 1);
        }
        await user.save();
        return ('Item delete to shopping cart successfully!!!!!!!!!!!!!!!!!!!!!!!!!!');
    } catch (error) {
        ('Error delete item to shopping cart:', error);
        return ('Error delete item to shopping cart');
    }

}
const globaldeletevacationPackaget = async ({ userId, vacationId }, res) => {
    try {
        const user = await User.findById(userId).populate('shoppingCart');
        const vacation = await Vacation.findById(vacationId).populate('registeredVactioners');
        if (!user || !vacation) {
            return ('no user like that in delete vacationPackaget');

        }

        const id2 = user.vacationPackage.findIndex(item => item.vacations.toString() === vacation._id.toString());
        if (id2 === -1) {

        } else if (user.vacationPackage[id2].quantity === 1) {

            user.vacationPackage.splice(id2, 1);

        }
        else if (user.vacationPackage[id2].quantity > 1) {
            user.vacationPackage[id2].quantity--;

        }
        //  console.log(user.shoppingCart, "user.shoppingCart");
        await user.save();

        return ('Item delete to vacationPackage successfully');

    } catch (error) {
        ('Error delete item to vacationPackage:', error);
        return ('Error delete item to vacationPackage');
    }

}
const getAllUser = async (req, res) => {
    const user = await User.find({}, { password: 0 }).lean()
    if (!user) {
        return res.status(400).json({ message: "no user found" })
    }
<<<<<<< HEAD
=======
    //  console.log("fffffffffffffffffff");
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
    res.json(user)


}
const getUserById = async (req, res) => {

    const { id } = req.params
    const user = await User.findById(id, { password: 0 }).lean()
    if (!user) {
        return res.status(400).json({ message: "no user found" })
    }
    res.json(user)

}
<<<<<<< HEAD

=======
// const createNewUser=async (req,res)=>{

//     const {password,firstname,lastname,email,roles,vacationPackage,shoppingCart,pay}=req.body
//     if(!email || !password||!firstname||!lastname){
//         return res.status(400).json({message:'Fields is required'})
//     }
//     const user_check= await User.find({email}).lean()
//     if(user_check?.length)
//         return res.status(400).json({message:'There is the same username'})
//     if(roles)
//         if(roles!="User" &roles!="Manager"){
//             return res.status(400).json({message:'Invalid roles'})
//         }

//     const user = await User.create({password,firstname,lastname,email,roles,vacationPackage,shoppingCart,pay})
//     if(password===process.env.ManagerPassword)
//     {
//           console.log("yes!! the manager here!!!!");
//         user.roles='Manager';
//     }
//     if(user.roles=='User'){ 
//         return res.status(201).json({message:"new user created"})
//         }
//     else   if(user.roles=='Manager'){ 
//         return res.status(201).json({message:"new Manager created"})
//         }
//     {
//         return res.status(400).json({message:"no user found"})
//     }

// }
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
const deleteUser = async (req, res) => {

    const { _id } = req.body
    const user = await User.findById(_id).exec()

    if (!user) {
        return res.status(400).json({ message: "no  found to delete" })
    }
    const result = await user.deleteOne()
    const reply = `Username ${result.firstname} ID ${result._id} deleted`
    res.json(reply)
}
<<<<<<< HEAD

const AddQuestionToTamar = async (req, res) => {
     const { text,email } = req.body
const from=email;
const body=text;
sendEmailToTamar(from,body)

        // const Tamar = await User.findById(process.env.ManagerPassword).exec();
        // console.log(Tamar);

}
=======
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
const updateUser = async (req, res) => {//*
    const { _id, firstname, lastname, email, roles, pay } = req.body
    if (!_id) {
        return res.status(400).json({ message: " _id  not found" })
    }

    //    const user= await User.find({email:email,}).lean()
    //     if(user?.length)
    //         return res.status(400).json({message:'There is the same email'})
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json('no user like that')
    }
    //  console.log(user, "user");
    //user.password = password
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.roles = roles
    // user.vacationPackage=vacationPackage
    //user.shoppingCart=shoppingCart
    user.pay = pay
    const updatedUser = await user.save()
    res.json(`'${updatedUser.firstname}' updated 😊😊😊`)

}





const addToShoppingCart = async (req, res) => {
    //  console.log("hhhhhhhhhhhhhhhhhhhhhh");
    const { userId, vacationId } = req.body;

    try {
        const user = await User.findById(userId).populate('shoppingCart');
        console.log(user, "::user");
        const vacation = await Vacation.findById(vacationId).populate('registeredVactioners');
        //  console.log(vacation,"::vacation");
        //   console.log(user);
        //  console.log(vacationId);
        if (!user || !vacation) {

            return res.status(404).json('no user like that');

        }


        const id2 = user.shoppingCart.findIndex(item => item.vacations.toString() === vacation._id.toString());
        if (id2 === -1) {
            user.shoppingCart.push({ vacations: vacation._id, quantity: 1 });
        } else {
            user.shoppingCart[id2].quantity++;
        }
        await user.save();
        // const check_if_user_in_list = vacation.registeredVactioners.findIndex(item => item.users.toString() === user._id.toString());
        // if (check_if_user_in_list === -1) {
        //     vacation.registeredVactioners.push({ users: user._id, quantity: 1 });
        // } else {
        //     vacation.registeredVactioners[check_if_user_in_list].quantity++;
        // }
        // await vacation.save();
        return res.json('Item added to shopping cart successfully');

    } catch (error) {
        console.error('Error adding item to shopping cart:', error);
        return res.status(500).json('Error adding item to shopping cart');
    }
};
<<<<<<< HEAD
const addToMyvacationPackage = async (req, res) => {
=======
const addTovacationPackage = async (req, res) => {
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
    const { userId } = req.body;
    try {
        const user = await User.findById(userId).populate('shoppingCart');
        //console.log("444 user", user.firstname);

        if (!user || !user.shoppingCart || user.shoppingCart.length === 0) {
            return res.status(404).json({ error: 'Your shopping cart is empty' });
        }

        for (let i = 0; i < user.shoppingCart.length; i++) {
            const cartItem = user.shoppingCart[i];
            console.log("tttt", cartItem);
            const vacation = await Vacation.findById(cartItem.vacations.toString());
            if (!vacation) {
                return res.json('Cannot find vacation in your basket');
            }

            console.log("purchaseDate:+++", new Date(Date.now()));
            vacation.registeredVactioners.push({ users: userId, quantity: cartItem.quantity, purchaseDate: new Date(Date.now()) });
            await vacation.save();


            const obj = { vacations: cartItem.vacations, quantity: cartItem.quantity, purchaseDate: new Date(Date.now()) };
            user.vacationPackage.push(obj);

            user.shoppingCart.splice(i, 1);
            i--;
        }

        await user.save();
<<<<<<< HEAD
=======
        console.log("email.............",user.email);
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        sendEmailToUserf(user.email,"your password is: "+user.password)
        return res.json('Items added to vacation package successfully');
    } catch (error) {
        console.error('Error adding items to vacation package:', error);
        return res.status(500).json({ error: 'Error adding items to vacation package' });
    }
};

<<<<<<< HEAD
function sendEmailToUserf(to, body) {
    mailer.sendEmail(to, body)
        .then(info => {
            console.log('Email sent to user: ', info.response);
=======


function sendEmailToUserf(to, body) {
    mailer.sendEmail(to, body)
        .then(info => {
            console.log('Email sent: ', info.response);
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        })
        .catch(error => {
            console.log('Error sending email: ', error);
        });
}

function sendEmailToTamar(from, body) {
    mailerTmar.sendEmail(from, body)
        .then(info => {
<<<<<<< HEAD
            console.log('Email sent to tamar: ', info.response);
=======
            console.log('Email sent: ', info.response);
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
        })
        .catch(error => {
            console.log('Error sending email: ', error);
        });
<<<<<<< HEAD
};
=======
}
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278


const deleteFromShoppingCart = async (req, res) => {
    const { userId, vacationId } = req.body;
    try {
        const user = await User.findById(userId).populate('shoppingCart');
        const vacation = await Vacation.findById(vacationId).populate('registeredVactioners');
        if (!user || !vacation) {
            return res.status(404).json('no user/vacation  like that in delete shoppingCart');

        }
        const id2 = user.shoppingCart.findIndex(item => item.vacations.toString() === vacation._id.toString());
        if (id2 === -1) {

        } else if (user.shoppingCart[id2].quantity === 1) {

            user.shoppingCart.splice(id2, 1);

        }
        else if (user.shoppingCart[id2].quantity > 1) {
            user.shoppingCart[id2].quantity--;

        }
        //    console.log(user.shoppingCart, "user.shoppingCart");
        await user.save();

        return res.json('Item delete to shopping cart successfully');

    } catch (error) {
        console.error('Error delete item to shopping cart:', error);
        return res.status(500).json('Error delete item to shopping cart');
    }
};
const deleteFromvacationPackaget = async (req, res) => {
    const { userId, vacationId } = req.body;
    try {
        const user = await User.findById(userId).populate('shoppingCart');
        const vacation = await Vacation.findById(vacationId).populate('registeredVactioners');
        if (!user || !vacation) {
            return res.status(404).json('no user like that in delete vacationPackaget');

        }

        const id2 = user.vacationPackage.findIndex(item => item.vacations.toString() === vacation._id.toString());
        if (id2 === -1) {

        } else if (user.vacationPackage[id2].quantity === 1) {

            user.vacationPackage.splice(id2, 1);

        }
        else if (user.vacationPackage[id2].quantity > 1) {
            user.vacationPackage[id2].quantity--;

        }
        //  console.log(user.shoppingCart, "user.shoppingCart");
        await user.save();

        return res.json('Item delete to vacationPackage successfully');

    } catch (error) {
        console.error('Error delete item to vacationPackage:', error);
        return res.status(500).json('Error delete item to vacationPackage');
    }


};
const keepMeUpdate = async (req, res) => {
    const { _id, email } = req.body
<<<<<<< HEAD
    console.log("email",email);
=======
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
    if (!_id) {
        return res.status(400).json({ message: " _id  not found keep" })
    }
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json('no user like that keep')
    }
    user.isRegister=true
<<<<<<< HEAD
    // user.email = email
=======
    user.email = email
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
    const updatedUser = await user.save()
    body=" 👍תודה שנרשמת לתמר נופשים! אנחנו נעדכן אותך, ונשלח לך הודעה למייל בכל נופש חדש שנפתח..... "
    sendEmailToUserf(user.email,body )
    res.json(`${updatedUser.firstname} updatedkepp 😊😊😊`)


};


const allRegisters =  async(req,res) => {
    console.log();
     const user = await User.find({}, { password: 0 }).lean() 
     if (!user) {
        return res.status(400).json({ message: "no user found" })
    }
     const registerUser=[]
     user.forEach(i => {
        if(i.isRegister===true){
        console.log("its true");
        registerUser.push(i)
    }
     });
     res.json(registerUser)

<<<<<<< HEAD
};
=======
}
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
const sendEmailTamar =  async(req,res) => {
  const   {from,body}=req.body
    console.log("sendEmailTamar");
    sendEmailToTamar(from, body)
<<<<<<< HEAD
};

const a =  async(req,res) => {
   
      console.log("a");
  };
=======
}
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278






<<<<<<< HEAD
module.exports = { sendEmailTamar,allRegisters,keepMeUpdate, AddQuestionToTamar,getAllUser, getUserById, deleteUser, globaldeleteShopingcart, globaldeletevacationPackaget, updateUser, addToShoppingCart, addToMyvacationPackage, deleteFromShoppingCart, deleteFromvacationPackaget }
=======
module.exports = { sendEmailTamar,allRegisters,keepMeUpdate, getAllUser, getUserById, deleteUser, globaldeleteShopingcart, globaldeletevacationPackaget, updateUser, addToShoppingCart, addTovacationPackage, deleteFromShoppingCart, deleteFromvacationPackaget }
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
