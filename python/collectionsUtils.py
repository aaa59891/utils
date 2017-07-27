from collections import defaultdict
import traceback
'''
 return dictionary
 every value with same key will group by together
 {
   key1: [values],
   key2: [values],
   ...
 }
 ** this function will discard all data which do not have the key
'''
def dictListGroupBy(dl, key):
  nd = defaultdict(list)
  for d in dl:
    if key not in d:
      continue
      # nd['nokey'].append(d)
    else:
      temp = d[key]
      d.pop(key)
      nd[temp].append(d)
  return nd

def dictListGroupByTwoLayer(dictList, key1, key2):
  newDict = defaultdict(list)
  for data in dictList:
    if key1 not in data or key2 not in data[key1]:
      continue
      # newDict['noKey'].append(data)
    else:
      temp = data[key1][key2]
      data[key1].pop(key2)
      newDict[temp].append(data)
  return newDict

'''
 return list
 the dataList needs to be sorted before use this function
'''
def dictListGroupByGen(dataList, key):
  a = list()
  temp = dataList[0][key]
  for data in dataList:
    if key not in data:
      continue
    if data[key] != temp:
      yield (temp, a)
      temp = data[key]
      a.clear()
    data.pop(key)
    a.append(data)
  yield (temp, a)

def dictListGroupByTwoLayerGen(dataList, key1, key2):
  a = list()
  temp = dataList[0][key1][key2]
  for data in dataList:
    if key2 not in data[key1]:
      continue
    if data[key1][key2] != temp:
      yield (temp, a)
      temp = data[key1][key2]
      a.clear()
    data[key1].pop(key2)
    a.append(data)
  yield (temp, a)
