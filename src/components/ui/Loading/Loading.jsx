import styles from './loading.module.sass';
const Loading = () => {
  const loadingClass = `${styles.loading} `;
  return (
    <div className={loadingClass}>
      <span>.....</span>
    </div>
  )
}

export default Loading