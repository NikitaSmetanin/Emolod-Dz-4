import type { MassageListProps } from '../../../types';
import './style.css';

const MassageList = (props: MassageListProps) => {

  return (
    <>
      <div className="massage-list">
        {props.massages.map((massage) => (
          <div
            key={massage.id}
            className={`massage ${massage.isOwner ? 'you' : ''}`}
          >
            <div className="massage-author">{massage.author}</div>
            <div className="massage-text">{massage.text}</div>
            <div className="massage-time">
              {massage.time.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MassageList