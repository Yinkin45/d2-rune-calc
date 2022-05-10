import styles from './MasterDetailLayout.module.css'

export default function MasterDetailLayout({ children }) {
  return (
    <div>
      {children.map((child, index) => (
        <div className={getClassForIndex(index)} key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}

function getClassForIndex(index) {
  if (index === 0) {
    return styles.master
  } else {
    return styles.detail
  }
}
