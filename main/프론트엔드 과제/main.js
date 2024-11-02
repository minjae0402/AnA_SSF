// JavaScript에 오신 여러분들을 환영합니다.
/*
/
    ######     #####   #######
  #       #   #     #  #       
  #          #         #       
    #####     #####    #####   
          #        #   #       
  #      #   #     #   #       
    #####     #####    #      
/
/
*/
//-----이 부분에 변수를 하나 선언하고 숫자를 지정해서 MyProfile에 보이게 해봅시다!------
//변수 선언 예시 -> let a = 10;

//----------------------------------------------------------------------
/*
/
/
/
/
/
/
    ######     #####   #######
  #       #   #     #  #       
  #          #         #       
    #####     #####    #####   
          #        #   #       
  #      #   #     #   #       
    #####     #####    #      
/
/
dlrow olleh
hello world
/
/
/
/
/
/
/
/
/
/
*/
//----------------------------------------------------------------------------
document.getElementById('moreinfo').addEventListener('click', function () {
  const detailsSection = document.getElementById('section');
  if (
    detailsSection.style.display === 'none' ||
    detailsSection.style.display === ''
  ) {
    detailsSection.style.display = 'block';
    this.textContent = '소개 닫기';
  } else {
    detailsSection.style.display = 'none';
    this.textContent = '소개 보기';
  }
});
