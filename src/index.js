// 숫자야구 게임은 상대방이 속으로 생각한 숫자를 맞히는 게임입니다. 이 때의 숫자는 세 자리 숫자로, 각 자리는 0에서 부터 9까지 사용할 수 있으며, 중복된 자릿수는 허용하지 않습니다.
// 게임 방식은 스무고개와 비슷합니다. 플레이어는 9회까지 숫자를 제시할 수 있으며, 숫자가 존재하지만 자리가 틀렸을 때는 볼, 숫자의 자리까지 일치하면 스트라이크, 일치하는 숫자가 전혀 없으면 아웃이라는 결과가 나옵니다. 예를 들어, 속으로 생각한 숫자가 123이라고 하면,
// 과 같은 결과가 나옵니다. 3 스트라이크가 나오면 플레이어가 이기게 됩니다. 9회까지 숫자를 제시했는데도 맞히지 못하면, 플레이어가 지게 됩니다.

// + input 3개의 숫자를 입력 받음
// + 세자리 숫자는 0부터 9 까지, 중복되지 않음
// + 상대방이 생각하는 숫자가 램덤으로 생성
// + 존재하지 않고 자리가 틀리면 out
// + 존재하고 자리가 틀리면 B
// + 존재하고 자리도 맞으면 S
// + 시도 버튼을 눌러 확인
// + 다시시작 버튼을 눌러 초기화

const inputEL = document.querySelector('.pitch-input__digit')

//렌덤 정답 생성하는 코드
function randomDigit() {
  const arr = []
  do{
    const random = Math.floor(Math.random() * 10);
    if(!arr.includes(random)){
      arr.push(random)
    }
  }while(arr.length < 3)

  return arr
}
randomDigit()

//정답을 입력된 숫자와 비교하는 코드
  inputEL.addEventListener( input, e=>{

  })

//ball, strike를 알려주는 코드

//맞았다, 틀렸다를 알려주는 코드

//상태를 그려주는 코드
