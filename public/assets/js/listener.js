// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM loaded! 🚀");

  const formElement = document.getElementById("submitPostForm");
  const authorNameInput = document.getElementById("author_name");
  const authorEmailInput = document.getElementById("author_email");
  const cityInput = document.getElementById("city");
  const activityCategoryInput = document.getElementById("activity_category");
  const stateInput = document.getElementById("inputState");
  const activityDescriptionInput = document.getElementById("activity_description");
  const ratingInput = document.getElementById("rating");
  const costInput = document.getElementById("cost");
  const insiderInfoInput = document.getElementById("input_insider");
  const activityNameInput = document.getElementById("activity_name");
  const uploadInput = document.getElementById("inputGroupFile01");
  const REDIRECT_MAP = {
    "Food_Drink": "/foodrink",
    "Sports": "/sports",
    "Virtual": "/virtual",
    "Entertainment": "/entertainment",
    "Outdoors_Recreation": "/outdoors"
  }
  
  // Event listener for when the date idea is submitted
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(uploadInput.files[0]);
    const newPost = {
      author_name: authorNameInput.value.trim(),
      author_email: authorEmailInput.value.trim(),
      activity_category: activityCategoryInput.value,
      activity_name: activityNameInput.value.trim(),
      activity_description: activityDescriptionInput.value.trim(),
      rating: ratingInput.value.trim(),
      cost: costInput.value.trim(),
      city: cityInput.value.trim(),
      state_code: stateInput.value,
      input_insider: insiderInfoInput.value,
      input_photos: uploadInput.value
    };
    console.log("submitting post", newPost);
    submitPost(newPost);
  };
  formElement.addEventListener("submit", handleFormSubmit);

  // Event handler for when a user submits a post
  const submitPost = (post) => {
    fetch("/newEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((data) => {
       window.location.href = REDIRECT_MAP[post.activity_category]
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
});
