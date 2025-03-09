import fs from 'fs'

function parseSudokuFile(filePath: string): void {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const lines = fileContent.trim().split('\n')

  // return lines.map((line) => {
  //   const [id, puzzle] = line.split(' ')

  //   return {
  //     id,
  //     puzzle,
  //   }
  // })
}
