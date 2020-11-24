function Calculate() {
  var Input = document.getElementById("SelectInput");
  var InterestInput = parseFloat(document.getElementById("InterestInput").value);
  var PaymentTimes = parseInt(document.getElementById("PaymentTimes").value);
  var PaymentTimes2 = parseInt(document.getElementById("PaymentTimes2").value);
  var Output = document.getElementById("SelectOutput");
  var str = Input.options[Input.selectedIndex].text + " Convert to " + Output.options[Output.selectedIndex].text
  document.getElementById("AnswerTitle").innerHTML = str;

  var indexes = [Input.selectedIndex, Output.selectedIndex]

  var answer
  var i
  var d
  switch(indexes[0]) {
  case 0:
    // code block
        i = (1 + InterestInput/PaymentTimes)**PaymentTimes - 1
        d = i/(1+i)
        switch(indexes[1]) {
          case 0:
        // code block
          answer = PaymentTimes2 * ((1+i)**(1/PaymentTimes2) - 1)
          break;
          case 1:
              answer = i
            break;
          case 2:
              answer = Math.log(i+1)
            break;
          case 3:
              answer = i/(1+i)
            break;
          case 4:
          // code block
              answer = PaymentTimes2 * (1 - (1-d)**(1/PaymentTimes2))
            break;
          default:
      }
    break;
  case 1:
      // code block
         i = InterestInput
         d = i/(1+i)
        switch(indexes[1]) {
        case 0:
          answer = PaymentTimes2 * ((1+i)**(1/PaymentTimes2) - 1)
        break;
        case 1:
          answer = i
          break;
          case 2:
              answer = Math.log(i+1)
            break;
          case 3:
              answer = i/(1+i)
          break;
        case 4:
        // code block
            answer = PaymentTimes2 * (1 - (1-d)**(1/PaymentTimes2))
          break;
        default:
    }
    break;
  case 2:
        // code block
        i = Math.exp(InterestInput)-1
        d = i/(1+i)
       switch(indexes[1]) {
       case 0:
         answer = PaymentTimes2 * ((1+i)**(1/PaymentTimes2) - 1)
       break;
       case 1:
         answer = i
         break;
         case 2:
             answer = InterestInput
           break;
         case 3:
             answer = i/(1+i)
         break;
       case 4:
       // code block
           answer = PaymentTimes2 * (1 - (1-d)**(1/PaymentTimes2))
         break;
       default:
      }
    break;
  case 3:
        // code block
        d = InterestInput
        i = (1-d)**(-1) - 1
       switch(indexes[1]) {
       case 0:
         answer = PaymentTimes2 * ((1+i)**(1/PaymentTimes2) - 1)
       break;
       case 1:
         answer = i
         break;
         case 2:
             answer = Math.log(i+1)
           break;
         case 3:
             answer = InterestInput
         break;
       case 4:
       // code block
           answer = PaymentTimes2 * (1 - (1-d)**(1/PaymentTimes2))
         break;
       default:
      }
    break;
  case 4:
        // code block
        d = 1 - (1 - InterestInput/PaymentTimes)**(-PaymentTimes)
        i = (1-d)**(-1) - 1
       switch(indexes[1]) {
       case 0:
         answer = PaymentTimes2 * ((1+i)**(1/PaymentTimes2) - 1)
       break;
       case 1:
         answer = i
         break;
         case 2:
             answer = Math.log(i+1)
           break;
         case 3:
             answer = i/(1+i)
         break;
       case 4:
       // code block
           answer = PaymentTimes2 * (1 - (1-d)**(1/PaymentTimes2))
         break;
       default:
      }
    break;
  default:
      answer = "Not applicable";
}

document.getElementById("Answer").innerHTML = answer
}

function Hide1(){
  var Input = document.getElementById("SelectInput");
  var index = Input.selectedIndex;
  switch(index) {
    case 0:
    document.getElementById("PaymentTimesForm").style.display = "block"
    break;
    case 1:
        document.getElementById("PaymentTimesForm").style.display = "none"
      break;
    case 2:
        document.getElementById("PaymentTimesForm").style.display = "none"
      break;
    case 3:
        document.getElementById("PaymentTimesForm").style.display = "none"
      break;
    case 4:
    document.getElementById("PaymentTimesForm").style.display = "block"
      break;
    default:
  }

}

function Hide2(){
  var Input = document.getElementById("SelectOutput");
  var index = Input.selectedIndex;
  switch(index) {
    case 0:
    document.getElementById("PaymentTimesForm2").style.display = "block"
    break;
    case 1:
        document.getElementById("PaymentTimesForm2").style.display = "none"
      break;
    case 2:
        document.getElementById("PaymentTimesForm2").style.display = "none"
      break;
    case 3:
        document.getElementById("PaymentTimesForm2").style.display = "none"
      break;
    case 4:
    document.getElementById("PaymentTimesForm2").style.display = "block"
      break;
    default:
  }

}
