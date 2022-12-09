
<script src="./assets/js/jquery.js"></script>

<form name="form1" method="post" id="form1" action="https://test.sbiepay.sbi/secure/AggregatorHostedListener">
               
                    <table>
                        <tr>
                            <td width="20px">

                                <input type="hidden" name="EncryptTrans" id="EncryptTrans" value = "4vob0JRqBbBflC/UnrMNIajMrM2Hi2HSQQsV0/KbJ1+1+7QEUAQCgGNgUZ2LMxsAS3fyvNjQHckQB9eoNpiYKM6KIAGdK58FzaB6TLXTBFzYhk4KJPG/eezUUkaG+vl308Uoxyh0mkDPrTIG/Ck5+duKJifEuDAbmIB69DKGq1KraMbDF9vE/s2yxiMvI+LO">

                                <input type="hidden" name="merchIdVal" id="merchIdVal" value="1000112">
                                 
                            </td>

                        </tr>
                    </table>

 </form>
 
 <%
 /* 
 String MerchantId = "1000112";
 String AggregatorId = "SBIEPAY";
 String SuccessURL = succsesUrl;"
 String FailURL = "failURL";
 String  OperatingMode = "DOM";
 String  MerchantCountry = "IN";
 String  MerchantCurrency = "INR";
 String  TotalDueAmount = 100
 String  MerchantOrderNo = TXN202105061303111539; //Order no shoud be unique every time
 String  MerchantCustomerID = "2";
 String  Paymode = "NB";
 String Accesmedium = "ONLINE";
 String  TransactionSource = "ONLINE";
 String key_Array = "A7C9F96EEE0602A61F184F4F1B92F0566B9E61D98059729EAD3229F882E81C3A";
 

String Single_Request = MerchantId + "|" + OperatingMode + "|" + MerchantCountry + "|" + MerchantCurrency + "|" + TotalDueAmount + "|" + Otherdetail + "|" + SuccessURL + "|" + FailURL + "|" + AggregatorId + "|" + MerchantOrderNo + "|" + MerchantCustomerID + "|" + Paymode + "|" + Accesmedium + "|" + TransactionSource;
  */
 %>
 <script>
 $("#form1").submit();
 </script>