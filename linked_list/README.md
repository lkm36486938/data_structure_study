# Linked List

```
참고: https://velog.io/@kimkevin90/Javascript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-Linked-List-%EA%B5%AC%ED%98%84
```

## 정의

Linked List 배열과 달리 메모리상에 index에 의한 물리적 배치를 하지 않고, <br>
node 를 생성 후 해당 node 의 pointer에 의해 다음 node 를 연결한다.<br>
<u>이를 통해 Linked List는 데이터 삽입/삭제 시 데이터의 구조를 재정렬하지 않아도 된다.</u> <br>
<br>

## 이점

- 새로운 elements를 삽입, 삭제 시 용이
- resturcturing 이 덜 복잡함

## 단점

- array 보다 많은 메모리 사용
- 특정 element를 검색 시 비효율적임

## 구현

### 예시

```
구현참고: https://sebhastian.com/linked-list-javascript/
```

Javascript 에서 연결리스트는 객체를 통해 구현할 수 있다. <br>
아래 예시는 두개의 객체를 next로 연결하여 Linked List의 기본적인 구조를 보여준다.

```
const n1 = {
  data: 100
}

const n2 = {
  data: 200
}

n1.next = n2;

console.log(n1) // { data: 100, next: { data: 200 } }

```

<br>
or
<br>
```
const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};
```

<a href='./linked.list.js'>linked.list.js</a>
