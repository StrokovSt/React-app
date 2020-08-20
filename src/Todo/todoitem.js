import React, {useContext} from 'react';
import PropTypes from 'prop-types'; 
import Context from '../context.js'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: `.5rem`,
    padding: '.5rem 1rem',
    border: `1px solid #ccc`,
    borderRadius: `4px`,
  },

  input: {
    marginRight: '1rem'
  }
}

function TodoItem({todo, index, onChange}) {
  const {removeTodo} = useContext(Context);
  const classes = [];

  if (todo.complited) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox" 
          checked = {todo.complited}
          style={styles.input} 
          onChange = {() => onChange(todo.id)}>
        </input>
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  )
}

//Говорим какие типы данных мы ожидаем увидеть, валидируем входящие параметры

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem;
