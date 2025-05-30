function formatPhoneNumber(value: string): string {
    const digitsOnly = value.replace(/\D/g, "");
    return digitsOnly
        .replace(/^(\d{1,3})(\d{0,3})(\d{0,3})(\d{0,4}).*/, (_, g1, g2, g3, g4) => {
            let formatted = g1;
            if (g2) formatted += " " + g2;
            if (g3) formatted += " " + g3;
            if (g4) formatted += " " + g4;
            return formatted;
        });
}

export default formatPhoneNumber;