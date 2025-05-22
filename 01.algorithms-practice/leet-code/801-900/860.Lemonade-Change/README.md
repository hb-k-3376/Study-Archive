## 문제 설명

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

## 제한사항

1 <= bills.length <= 105
bills[i] is either 5, 10, or 20.

## 예시

### Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation:
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

### Example 2:

Input: bills = [5,5,10,10,20]
Output: false
Explanation:
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.

## 문제 풀이

레모이드는 무조건 하나만 (5달러) 주문이 가능하고, 손님은 5달러,10달러, 20달러 지폐를 지불한다.
그러면 5달러 10달러 지페를 추적해서 거스름돈을 줄 수 있는지 없는지를 체크하면 되고 20달러 지페는 거스름돈이 될 수 없으니 추적하지 않아도 된다.
일반적인 구현 문제이다.
