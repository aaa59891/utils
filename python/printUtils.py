def printObject(obj):
  attrs = vars(obj)
  print('\n'.join('<{0}>: {1}'.format(key, value) for key, value in attrs.items()) + '\n')

def printObjectArr(objArr):
  for obj in objArr:
    printObject(obj)