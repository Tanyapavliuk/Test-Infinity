function getPostDate() {
    var currentDate = new Date();
  
    currentDate.setDate(currentDate.getDate() - 5);
  
    var day = currentDate.getDate();
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');; 
    var year = currentDate.getFullYear();
  
    return `${day}-${month}-${year}`;
  }

  const postDataEl = document.querySelector("#postData")
  postDataEl.textContent = getPostDate()
