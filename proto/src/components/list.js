import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const createData = (
  title,
  create,
  update,
  sp
) => {
  return { title, create, update, sp };
};

const rows = [
  createData("タイトル1", "2021/12/1 12:00", "2021/12/1 12:00", "窓口"),
  createData("タイトル2", "2021/12/1 12:00", "2021/12/1 12:00", "窓口"),
  createData("タイトル3", "2021/12/1 12:00", "2021/12/1 12:00", "窓口"),
  createData("タイトル4", "2021/12/1 12:00", "2021/12/1 12:00", "窓口"),
  createData("タイトル5", "2021/12/1 12:00", "2021/12/1 12:00", "窓口"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const List = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>タイトル</TableCell>
                <TableCell align="right">作成日</TableCell>
                <TableCell align="right">更新日</TableCell>
                <TableCell align="right">種別</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow key={row.title}>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.create}</TableCell>
                    <TableCell align="right">{row.update}</TableCell>
                    <TableCell align="right">{row.sp}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
  };

  export default List;
