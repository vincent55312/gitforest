import parseISO from "date-fns/parseISO";
import {format} from "date-fns";

export function formatDate2(dateString: string) {
    const startDate = parseISO(dateString);
    return format(startDate, 'do MMMM yyyy');
}