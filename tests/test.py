def digitize(n):
    to_string = str(n)
    new_list=[]
    for dig in to_string:
      new_list.append(int(dig))
    new_list.reverse()
    return new_list
    



print(digitize(12345))