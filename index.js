// Your code here
// const intervalID = scope.setInterval(now, 1000);


$(document).ready(function() {

    let intervalID = setInterval(function () {
    let rightNow = new Date()
    let hour = rightNow.getHours()
    let minute = rightNow.getMinutes()
    let second = rightNow.getSeconds()


    $('#clock').html(`${hour}.${minute}.${second}`);

    // if(rightNow.getSeconds() === 00) {
    //   $( 'body' ).removeAttr('class').addClass('zerozero')op;
    // }

    if(rightNow.getSeconds()%10 === 1) {
      $( 'body' ).removeAttr('class').addClass('one');
    }
    else if(rightNow.getSeconds()%10 === 2) {
      $( 'body' ).removeAttr('class').addClass('two');
    }
    else if(rightNow.getSeconds()%10 === 3) {
      $( 'body' ).removeAttr('class').addClass('three');
    }
    else if(rightNow.getSeconds()%10 === 4) {
      $( 'body' ).removeAttr('class').addClass('four');
    }
    else if(rightNow.getSeconds()%10 === 5) {
      $( 'body' ).removeAttr('class').addClass('five');
    }
    else if(rightNow.getSeconds()%10 === 6) {
      $( 'body' ).removeAttr('class').addClass('six');
    }
    else if(rightNow.getSeconds()%10 === 7) {
      $( 'body' ).removeAttr('class').addClass('seven');
    }
    else if(rightNow.getSeconds()%10 === 8) {
      $( 'body' ).removeAttr('class').addClass('eight');
    }
    else if(rightNow.getSeconds()%10 === 9) {
      $( 'body' ).removeAttr('class').addClass('nine');
    }
    else {
      $( 'body' ).removeAttr('class');
    }


  },

    1000);


});
