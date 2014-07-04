var messages = [
    {
        image: 'https://i.minus.com/iO45SRZ3wkAYW.jpg',
        messages: {
            en: {
                title: 'Look at how much money we can make while not browsing Facebook',
                button: 'Let\'s Make Some Money!'
            },
            vi: {
                title: 'Hãy xem bạn có thể kiếm được bao tiền khi đang không vào Facebook này',
                button: 'Bắt đầu kiếm tiền thôi!'
            }
        }
    },
    {
        image: 'https://i.minus.com/iPVuh5vJ4oBss.png',
        messages: {
            en: {
                title: 'You can drive this USD 500.000 Bentley if you work hard instead of wasting time on Facebook',
                button: 'Yes, I want to drive that Bentley!'
            },
            vi: {
                title: 'Hãy xem bạn có thể kiếm được bao tiền khi đang không vào Facebook này',
                button: 'Bắt đầu kiếm tiền thôi!'
            }
        }
    },
    {
        image: 'https://i.minus.com/ilcIqEQTLTtZD.png',
        messages: {
            en: {
                title: 'You can live in this mansion if you don\'t waste time on Facebook',
                button: 'Yes, I will live in that mansion!'
            },
            vi: {
                title: 'Bạn có thể sống trong căn biệt thự lộng lẫy này nếu không phí thời gian vào Facebook',
                button: 'Tôi muốn sống trong căn biệt thự đó!'
            }
        }
    },
    {
        image: 'https://i.minus.com/ibc9FCeOVhintU.jpg',
        messages: {
            en: {
                title: 'You can be that guy kissing your million bucks instead of stalking others people\' Facebook',
                button: 'I want my ten millions!'
            },
            vi: {
                title: 'Bạn có thể là anh chàng trong ảnh, hôn vài triệu đô thay vì đọc status vớ vẩn của người khác',
                button: 'Tôi muốn 10 triệu đô của tôi!'
            }
        }
    }
];

var getRandomMessage = function() {
    var random = Math.floor(Math.random() * messages.length) + 1;
    return messages[random - 1];
}