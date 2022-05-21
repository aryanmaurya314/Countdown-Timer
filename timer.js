

setInterval(() => {
    const end = new Date('5-31-2022 11:59:59').getTime();

    const start = new Date().getTime();


    const diff = end - start;

    const days = Math.floor((diff / (1000 * 60 * 60 * 24)))
    // console.log(days);
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    // console.log(hours);

    const minutes = Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)));
    // console.log(minutes);

    const seconds = Math.floor((diff % (1000 * 60) / (1000)));
    // console.log(seconds);

    if (seconds >= 0) {
        document.getElementById('timer').innerHTML = `${days} d, ${hours} hrs ${minutes} min ${seconds} sec`;
    } else {
        document.getElementById('timer').innerHTML = `0 d, 00 hrs 00 min 00 sec`;
    }

}, 1000);

