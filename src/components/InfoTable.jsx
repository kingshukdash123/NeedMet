import '../style/InfoTable.css'

function InfoTable({ title, columns, rows , style}) {
  return (
    <div className={`info-section`} style={style}>
      <h2>{title}</h2>

      <table className="info-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InfoTable;