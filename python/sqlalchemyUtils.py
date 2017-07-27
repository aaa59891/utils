def updateDbData(dbData, newData):
  attr = vars(newData)
  for key, val in attr.items():
    if key == '_sa_instance_state':
      continue
    setattr(dbData, key, val)

'''
  models must implement this function before using dictifyModel()
  def as_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}
'''
def dictifyModel(data):
  if not data:
    return {}
  if type(data) is list:
    return [d.as_dict() for d in data]
  elif type(data) is str:
    return data
  else:
    return data.as_dict()