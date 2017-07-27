from functools import wraps
'''
  must check the db variable!!!
'''
db

def transactional(func):
  @wraps(func)
  def new_func(*args, **kwargs):
    session = db.session
    try:
      result = func(*args, **kwargs)
      session.commit()
      return result
    except Exception as e:
      session.rollback()
      raise e
  return new_func
