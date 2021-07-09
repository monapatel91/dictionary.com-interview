module.exports = class FeedbackApp {
  formatFeedback(feedback) {
    // Let's get started by declaring const
    const {word,comment,date, rating} = feedback
    
    // convet 0-100 scale to 0.5 scale
    let fiveScaleRatings = rating / 20;
    if(rating > 100) fiveScaleRatings = 5;
    
    // declare the empty array. We will fill out this array by looping through rating numbers
    let ratingStars = [];

    // Loop through rating numbers and fill out the ratingStars array
    for (var i = fiveScaleRatings; i >= 1; i--)
      ratingStars.push('★')
      if ((fiveScaleRatings % 1) > 0.5) ratingStars.push('½');
      const ratingStarStr = ratingStars && ratingStars.join('')
      
    // format the date 
    let shortDate = '';
    let dateString = date;
    dateString = new Date(dateString);
    const year = dateString.getFullYear();
    const month = (1 + dateString.getMonth()).toString();
    const day = dateString.getDate().toString().padStart(2, '0');
    shortDate = `(${month}/${day}/${year})`;
 
    // Now let's format the feedback as requirement
    let formattedFeedback = `${word}: ${comment} ${ratingStarStr} ${shortDate}`;
    let omitRatingFormattedFeedback = `${word}: ${comment} ${shortDate}`;

    if(formattedFeedback.length > 80)
      formattedFeedback =  `${word}: ${comment} ${ratingStarStr}`;
    if(formattedFeedback.length > 80){
      const totalStarLength = ratingStarStr.length;
      const wordLength = word.length;
      formattedFeedback =  `${word}: ${comment.substring(0, 80 - totalStarLength-wordLength - 6) + '...'} ${ratingStarStr}`;
     }
    
    return ratingStars.length ? formattedFeedback : omitRatingFormattedFeedback;
  }
};
