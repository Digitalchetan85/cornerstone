<?php 
if(isset($_POST['submit'])){
    
    
    //print_r($_POST);die;

    $to = 'vishalpra0786@gmail.com'; // this is your Email address
    $from = 'noreplay@cornerstoneakhinta.com';//$_POST['email']; // this is the sender's Email address
//print_r($_POST);die;

    $name = $_POST['name'];
    // print_r($_POST);
    $mobile = $_POST['phone'];
     $email = $_POST['email'];
    $product_name = $_POST['product_name'];
    $subject = $_POST['subject'];
    $description = $_POST['message'];
     $captcha = $_POST['captcha'];
     
     
    $subject = "Copy of your form submission";

    $subject2 = "Copy of your form submission";
    $message = '<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<style type="text/css">
    body {
        width: 100%;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }
    @media only screen and (max-width: 600px) {
        table[class="table-row"] {
            float: none !important;
            width: 98% !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
        }
        table[class="table-row-fixed"] {
            float: none !important;
            width: 98% !important;
        }
        table[class="table-col"], table[class="table-col-border"] {
            float: none !important;
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            table-layout: fixed;
        }
        td[class="table-col-td"] {
            width: 100% !important;
        }
        table[class="table-col-border"] + table[class="table-col-border"] {
            padding-top: 12px;
            margin-top: 12px;
            border-top: 1px solid #E8E8E8;
        }
        table[class="table-col"] + table[class="table-col"] {
            margin-top: 15px;
        }
        td[class="table-row-td"] {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        table[class="navbar-row"] , td[class="navbar-row-td"] {
            width: 100% !important;
        }
        img {
            max-width: 100% !important;
            display: inline !important;
        }
        img[class="pull-right"] {
            float: right;
            margin-left: 11px;
            max-width: 125px !important;
            padding-bottom: 0 !important;
        }
        img[class="pull-left"] {
            float: left;
            margin-right: 11px;
            max-width: 125px !important;
            padding-bottom: 0 !important;
        }
        table[class="table-space"], table[class="header-row"] {
            float: none !important;
            width: 98% !important;
        }
        td[class="header-row-td"] {
            width: 100% !important;
        }
    }
    @media only screen and (max-width: 480px) {
        table[class="table-row"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
        }
    }
    @media only screen and (max-width: 320px) {
        table[class="table-row"] {
            padding-left: 12px !important;
            padding-right: 12px !important;
        }
    }
    @media only screen and (max-width: 458px) {
        td[class="table-td-wrap"] {
            width: 100% !important;
        }
    }
    {
           .brand-text{ position: relative;
    top: 2px;
    font-weight: 300;
    text-transform: uppercase;
    }
  </style>
</head>
<body style="font-family: Arial, sans-serif; font-size:13px; color: #fff; min-height: 200px;" bgcolor="#fff" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">
<table width="100%" height="100%" bgcolor="#fff" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td width="100%" align="center" valign="top" bgcolor="#fff" style="background-color:#fff; min-height: 200px;"><table>
        <tr>
          <td class="table-td-wrap" align="center" width="458"><table class="table-space" height="18" style="height: 18px; font-size: 0px; line-height: 0; width: 450px; background-color: #fff;" width="1000" bgcolor="#fff" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td class="table-space-td" valign="middle" height="18" style="height: 18px; width: 450px; background-color: #fff;" width="1000" bgcolor="#fff" align="left">&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <table class="table-space" height="8" style="height: 8px; font-size: 0px; line-height: 0; width: 450px; background-color: #ffffff;" width="1000" bgcolor="#FFFFFF" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td class="table-space-td" valign="middle" height="8" style="height: 8px; width: 450px; background-color: #ffffff;" width="1000" bgcolor="#FFFFFF" align="left">&nbsp;</td>
                </tr>
              </tbody>
            </table><table class="table-row" width="1000" bgcolor="#FFFFFF" style="table-layout: fixed; background-color: #ffffff;" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr>
                  <td class="table-row-td" style="font-family: Arial, sans-serif; line-height: 19px; color: #fff; font-size: 13px; font-weight: normal; padding-left: 36px; padding-right: 36px;" valign="top" align="left"><table class="table-col" align="left" width="1000" cellspacing="0" cellpadding="0" border="0" style="table-layout: fixed;">
                      <tbody>
                        <tr>
                          <td class="table-col-td" style="background: #faeaea;" width="1000" style="font-family: Arial, sans-serif; line-height: 19px; color: #fff; font-size: 13px; font-weight: normal; width: 378px;" valign="top" align="left"><table class="header-row" width="1000" cellspacing="0" cellpadding="0" border="0" style="table-layout: fixed;">
                            
                            </table>
                            <div style="font-family: Arial, sans-serif; line-height: 20px; color: #fff; font-size: 13px;margin:10px">
 <div style="font-family: Arial, sans-serif; line-height: 20px; color: #fff; font-size: 13px;margin:10px">
 <p style="color:black !important;">Name '.$name.',<br />
 <br /> Enquiry Detail :- '.$description.'<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp; .'.$name.'<br />
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Email:&nbsp; .'.$email.'<br />
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Mobile:&nbsp; .'.$mobile.'<br />
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Product Name :&nbsp; .'.$product_name.'<br />
<p style="color:black !important;">Thank you,</p>

</div>
</div>
</td>
                        </tr>
                      </tbody>
                    </table></td>
                </tr>
              </tbody>
            </table>
            
            
            
            
            </td>
        </tr>
      </table></td>
  </tr>
</table>
</body>



</html>'; 

    $headers = "From:" . $from;
    $headers2 = "To:" . $to;
   // mail($to,$subject,$message,$headers);
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
   // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
      $headers = 'MIME-Version: 1.0';
$headers = 'Content-type: text/html; charset=iso-8859-1';
     if (mail($to, $subject, $message,$headers)) {
          $output='Thank you for Choose Our Product We Will Connect You Shortly';
    }
    else {
         $output='Failed';
    }
    
    
    }
?>


<html>
    <titile>
        
    </titile>
    
<head>
    
</head>
    <body>
         <div class="col-lg-4" style="background-color: black; opacity: 0.8; padding: 40px; height: 400px;border-radius: 50px;">
          <h2 style="font-size: 35px; color: white; text-align: center;">Schedule Site Visit</h2>
          <?php if($output){
          echo $output;} 
          
          ?>
           <form name="feedbackform" method="post" class="feedbackform" id="contact_form">
               
       <table style="border-collapse: separate;border-spacing: 10px 8px;width:99%;">
      <tbody>
      <tr><td style="text-align:center;"><input type="hidden" name="enqproject" id="enqproject"></td></tr>
      
      <tr><td style="text-align:center;"><input type="text" name="name" class="name contactform" placeholder="Name" pattern="[a-zA-Z\s]{2,}" required="required"></td></tr>
      <tr><td style="text-align:center;"><input type="email" name="email" class="email contactform" placeholder="Email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required="required"></td></tr>
      <tr><td style="text-align:center;">
      <input type="text" name="phone" id="phone" class="phone contactform" placeholder="Mobile No." pattern="[0-9]{10}"  required="required" /></td>
      </tr>
      
      <tr><td style="text-align:center;"><textarea name="message" id="comment" class="comment contactform" placeholder="Your Message..." required="required"></textarea></td></tr>
       <tr><td style="text-align:center;"><input type="submit" name="submit" style="width:50%;" class="feedback_go btnn-action" value="SUBMIT"></td></tr>
      
           
      </tbody></table>
            </form>
    </div>
    </body>
</html>
