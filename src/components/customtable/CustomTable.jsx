import { MaterialReactTable } from "material-react-table";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useCallback } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const CustomTable = (props) => {
  const handleRowClick = (row) => {
    if (props?.onRowClick) {
      props?.onRowClick(row);
    }
  };
  const handleDeleteRow = useCallback((row) => {
    if (props.delete && props.handleDelete) props.handleDelete(row);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEditRow = useCallback((row) => {
    if (props.edit && props.handleEdit) props.handleEdit(row);
  }, []);

  const handleNotificationIcon = useCallback((row) => {
    if (props.notification && props.handleNotification)
      props.handleNotification(row);
  }, []);

  const bodyBackgroundColor ="#ffff"

  return (
    <div className="custom_table">
      <MaterialReactTable
        columns={props?.columns || []}
        data={props?.data || []}
        isLoading={props?.isLoading}
        enableRowNumbers={props.enableRowNumbers || false}
        enableRowVirtualization
        headerTitle={props?.title || "My Table Title"}
        enableStickyHeader
        // Here you enable pagination
        enablePagination={props?.manualPagination}
        paginationPageSize={props?.pageSize || 10}
        enableEditing={props.enableEditing || false}
        // onEditingRowSave={handleSaveRow}
        editingMode={props.editingMode}
        rowCount={props?.rowCount}
        // onPaginationChange={handlePaginationChange}
        state={props?.state}
        initialState={{ density: props?.density || "compact" }}
        enableColumnResizing={props?.enableColumnResizing || true}
        enableColumnActions={props?.enableColumnActions}
        enableColumnFilters={props?.enableColumnFilters}
        enableSorting={props?.enableSorting}
        enableRowActions={props.enableRowActions || false}
        enableBottomToolbar={props?.enableBottomToolbar}
        enableTopToolbar={props?.enableTopToolbar}
        enableDensityToggle={props?.enableDensityToggle}
        enableHiding={props?.enableHiding}
        enableFullScreenToggle={props?.enableFullScreenToggle}
        enableGlobalFilter={props?.enableGlobalFilter}
        density={props?.density}
        renderRowActions={({ row, table }) => {
          return (
            <Box sx={{ display: "flex", gap: "0.1rem" }}>
              {props.edit && (
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => handleEditRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
              )}
              {props.delete && (
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteRow(row)}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              )}
              {props.notification &&
                (row?.original?.isAlertAdded ? (
                  <Tooltip arrow placement="right" title="Add to alert">
                    <IconButton
                      sx={{ color: "rgba(255, 184, 107, 1)" }}
                      onClick={() => handleNotificationIcon(row)}
                    >
                      <NotificationsActiveIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip arrow placement="right" title="Alert not set">
                    <IconButton
                      sx={{ color: "grey" }}
                      onClick={() => handleNotificationIcon(row)}
                    >
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                ))}
            </Box>
          );
        }}
        muiTableContainerProps={{
          sx: {
            maxHeight: props?.maxHeight || "600px",
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            backgroundColor:
              props?.headerBackgroundColor || "#401686",
            color:
              props?.headerColor || "#fafafa",
          },
        }}
        // enableRowSelection
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
            backgroundColor: bodyBackgroundColor,
          },
        })}
        muiTableHeadCellProps={{
          sx: {
            color: props?.miniHeaderColor || "#fafafa",
          },
        }}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
            <Typography variant="h3">{props?.title}</Typography>
            {props?.button1 && (
              <Button
                color="secondary"
                onClick={() => {
                  alert("Create New Account");
                }}
                variant="contained"
              >
                {props?.button1}
              </Button>
            )}
            {props?.button2 && (
              <Button
                color="error"
                // disabled={!table.getIsSomeRowsSelected()}
                onClick={() => {
                  alert("Delete Selected Accounts");
                }}
                variant="contained"
              >
                {props?.button2}
              </Button>
            )}
          </Box>
        )}
      />
    </div>
  );
};

export default CustomTable;
