import React from "react";
import PopupState, { bindMenu, bindTrigger, InjectedProps } from "material-ui-popup-state";

import { ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CheckRounded from "@mui/icons-material/CheckRounded";

import { Root } from "./Select.styles";

export interface SelectItem<TValue> {
    label: string;
    value: TValue;
}

export interface SelectProps<TValue> {
    items: SelectItem<TValue>[];
    value: TValue;
    onChange(value: TValue): void;
}

export function Select<TValue>({ value, items, onChange }: SelectProps<TValue>) {
    const [selectedItem, setSelectedItem] = React.useState<SelectItem<TValue> | null>(
        items.find(item => item.value === value) ?? null,
    );

    const handleItemClick = React.useCallback(
        (item: SelectItem<TValue>, popupState: InjectedProps) => {
            onChange(item.value);
            popupState.close();
        },
        [onChange],
    );

    React.useEffect(() => {
        setSelectedItem(items.find(item => item.value === value) ?? null);
    }, [items, value]);

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
                <>
                    <Root disableRipple {...bindTrigger(popupState)}>
                        <Typography variant="body1" fontSize="0.9rem" color="inherit" sx={{ mr: 0.5 }}>
                            {selectedItem?.label ?? ""}
                        </Typography>
                        <ArrowDropDownRoundedIcon color="inherit" />
                    </Root>
                    <Menu {...bindMenu(popupState)}>
                        {items.map(item => (
                            <MenuItem key={item.label} onClick={() => handleItemClick(item, popupState)}>
                                {item.value === value && (
                                    <ListItemIcon>
                                        <CheckRounded />
                                    </ListItemIcon>
                                )}
                                <ListItemText inset={item.value !== value}>{item.label}</ListItemText>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            )}
        </PopupState>
    );
}
