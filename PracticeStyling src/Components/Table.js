import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

export default function BasicTable({ rows }) {
    return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Equipment</TableCell>
                            <TableCell align="right">Taken by</TableCell>
                            <TableCell align="right">Subject</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.subject}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.equipment}
                                </TableCell>
                                <TableCell align="right">{row.takenby}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
