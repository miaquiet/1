import random

def rock_paper_scissors(user_choice):
    computer_choice = random.choice(["камень", "ножницы", "бумага"])
    
    if user_choice == computer_choice:
        winner = "Ничья"
    elif (user_choice == "камень" and computer_choice == "ножницы") or (user_choice == "ножницы" and computer_choice == "бумага") or (user_choice == "бумага" and computer_choice == "камень"):
        winner = "Вы"
    else:
        winner = "Компьютер"
    
    print(f"Вы показали {user_choice}, компьютер показывает {computer_choice}. Победил {winner}")


rock_paper_scissors("камень")