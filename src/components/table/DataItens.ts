import { ColDef, ColGroupDef } from "ag-grid-community";
import "./headerClassCenter.css";

export interface TableInterface {
  CNPJ_Companhia: string;
  Data_Referencia: string;
  Acionistas: string;
  "Conselho de Administracao": string;
  Diretoria: string;
  "Etica e Conflito de Interesses": string;
  "Orgaos de Fiscalizacao e Controle": string;
  mean: string;
  median: string;
  geomean: string;
  harmonic: string;
}

export const ColumnConfig:
  | (ColDef<TableInterface> | ColGroupDef<TableInterface>)[] = [
  {
    headerName: "CNPJ Companhia",
    field: "CNPJ_Companhia",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Data Referencia",
    field: "Data_Referencia",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Acionistas",
    field: "Acionistas",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Conselho de Administracao",
    field: "Conselho de Administracao",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Diretoria",
    field: "Diretoria",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Etica e Conflito de Interesses",
    field: "Etica e Conflito de Interesses",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Orgaos de Fiscalizacao e Controle",
    field: "Orgaos de Fiscalizacao e Controle",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "mean",
    field: "mean",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "median",
    field: "median",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "geomean",
    field: "geomean",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "harmonic.mean",
    field: "harmonic",
    sortable: true,
    filter: true,
    resizable: true,
  },
];

// Essa interface só existe para fazer o download, por conta da função que faz a conversão!
// Preferencialmente use ResultItem

export interface JSONToXLSXProps {
  jsonData: TableInterface[];
}

export interface RespostasInterface {
  ID_Item: string;
  Capitulo: string;
  Principio: string;
  Pratica_Recomendada: string;
  Não: string;
  "Não se Aplica"?: string;
  Parcialmente: string;
  Sim: string;
}

export const RespostasColumnConfig = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: true,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1.5,
  },
  {
    headerName: "Prática Recomendada",
    field: "Pratica_Recomendada",
    sortable: true,
    filter: true,
    resizable: true,
    wrapText: true,
    autoHeight: true,
    flex: 4,
    cellStyle: { lineHeight: "1.5" },
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    children: [
      {
        headerName: "Não",
        headerClass: "ag-header-cell-centered",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Não se Aplica",
        headerClass: "ag-header-cell-centered",
        field: "Não se Aplica",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Parcialmente",
        headerClass: "ag-header-cell-centered",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Sim",
        headerClass: "ag-header-cell-centered",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
    ],
  },
];

// nao mostra praticas recomendadas
export const RespostasColumnConfig2 = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: true,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1.5,
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    children: [
      {
        headerName: "Não",
        headerClass: "ag-header-cell-centered",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Não se Aplica",
        headerClass: "ag-header-cell-centered",
        field: "Não se Aplica",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Parcialmente",
        headerClass: "ag-header-cell-centered",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "Sim",
        headerClass: "ag-header-cell-centered",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        cellStyle: { textAlign: "center" },
      },
    ],
  },
];
