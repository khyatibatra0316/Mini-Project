function SendOTP(){
    const email=document.getElementById("email");
    const otpverify = document.getElementsByClassName("email-verify")[0];
    let otp_code=Math.floor(Math.random()*10000);
    let emailbody=`<h1>Your OTP is</h1>${otp_code}`;
    Email.send({
        SecureToken :"2137aec9-6e2f-40fd-b746-a85362ec7812",
        To : email.value,
        From : "khyati.batra2024@nst.rishihood.edu.in",
        Subject : "OTP using javascript.",
        Body : "And this is the body"
    }).then(
      message => {
        if(message==="OK"){
            alert("OTP sent to your email address" + email.value)

            otpverify.style.display="flex";
            let otp_inp=document.getElementById("otp_input");
            let otp_btn=document.getElementById("btn-verify-otp");
            otp_btn.addEventListener("click",()=>{
                if(otp_inp.value==otp_code){
                    alert("Email address verified...")
                    otpverify.style.display="none";
                    email.value="";
                    oyp_inp.value="";
                }else{
                    alert("Invalid OTP.")
                }

            })
        }
      }
    );
}