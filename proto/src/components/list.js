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
  name,
  category,
  weight,
  price
) => {
  return { name, category, weight, price };
};

const rows = [
  createData("チョコレート", "お菓子", 100, 120),
  createData("ケーキ", "お菓子", 400, 480),
  createData("りんご", "フルーツ", 500, 360),
  createData("バナナ", "フルーツ", 200, 300),
  createData("みかん", "フルーツ", 250, 180),
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
