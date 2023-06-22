const response = {
  status:200,
  message:{}
}

const setResponse = function (customMsg,customStatus) {
   response.status = customStatus
   response.message = customMsg;

 }

const sendResponse = function sendResponse(res) {
   res.status(response.status).json(response.message);
 }


module.exports={
   sendResponse,
   setResponse
}

 