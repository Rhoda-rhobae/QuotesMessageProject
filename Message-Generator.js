const firstMessage = ['“We cannot solve problems with the kind of thinking we employed when we came up with them.”',
'“Learn as if you will live forever, live like you will die tomorrow.',
'“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”', 
' “When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”— Eleanor Roosevelt',
' “When you change your thoughts, remember to also change your world.”—Norman Vincent Peale', 
'“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson',
 ];


const setMessage = (max) => Math.floor(Math.random()* max);

 const  getMessageLength =() => {
    return `${firstMessage[setMessage(firstMessage.length)]}`
 }


function setRandomMessage(){
    document.getElementById('get-message').innerHTML = getMessageLength();
}

document.getElementById('generate-message')
.addEventListener('click', setRandomMessage)

const styleList = document.querySelector('#container');

styleList.style.backgroundColor = 'gray';
styleList.style.width = '50%';
styleList.style.height = '50%';
styleList.style.borderRadius = '30px';
styleList.style.marginLeft = '20%';
styleList.style.paddingBottom = '20px ';

const center = document.querySelector('#get-message');
center.style.fontSize = '20px';
center.style.padding = '20px';
center.style.color = 'orange';
center.style.textJustify = 'auto';
center.style.fontFamily = 'Ubuntu', sans-serif;


