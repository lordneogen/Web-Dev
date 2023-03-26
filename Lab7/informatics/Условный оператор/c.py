correct_answers = [1, -1, -1, -1]
answer_system = int(input())
student_answer = int(input())

if student_answer == 1 and answer_system == correct_answers[0]:
    print("YES")
elif student_answer == -1 and answer_system != correct_answers[0]:
    print("YES")
elif student_answer != 1 and student_answer != -1:
    print("NO")
else:
    print("NO")