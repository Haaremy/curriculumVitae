import EditTeam from './edit';

export default function Page() {
    // Server-side code to read filenames from the movies directory
    const ids = [
        "XTPG8", "MBDQ3", "RFSK7", "LWQA0", "JPDZ4", "CQNW2", "HVFT6", "ZSKM9", "AWGJ1", "PLCF5",
        "RNXB8", "TGYP3", "QJFM7", "BDRW0", "LPHK4", "ZWXN2", "FCGL6", "SRPT9", "MKYJ1", "HVDF5",
        "JZTW8", "MQBV3", "RDHL7", "LNKA0", "WGJZ4", "PQMC2", "KBTN6", "ZVXM9", "FHLQ1", "DTGC5",
        "RPYX8", "SLJF3", "WQMT7", "NZKH0", "BQRF4", "VDCP2", "LMYJ6", "HSTG9", "PFKW1", "ZQMD5",
        "BJCN8", "GTRL3", "SNKH7", "VLFP0", "RQJB4", "XTLM2", "DKHG6", "MYPZ9", "QTCF1", "LJGW5",
        "NVRK8", "WXDP3", "ZQHJ7", "BFLC0", "PRMT4", "GKYN2", "DSQW6", "TVCF9", "HRPJ1", "MZKD5",
        "GJBT8", "QFRL3", "NXKP7", "HTMV0", "WDFQ4", "LPRJ2", "SZGC6", "VNKY9", "QMHT1", "CJBR5",
        "WRKV8", "PNJX3", "FXLM7", "ZQPH0", "BVTC4", "DLKP2", "HTMG6", "SNRJ9", "QPXF1", "KVYW5",
        "JQWR8", "GDFL3", "TXKM7", "BPLH0", "ZVMC4", "JRYN2", "FQSG6", "LXTP9", "WDKJ1", "PQHZ5",
        "RMXV8", "BZFL3", "HNGK7", "SVLJ0", "QCTM4", "JXRD2", "GPKT6", "WYQN9", "LTHJ1", "FZKC5", "FBINS"
    ];

    const pins = [
        'SX76', 'X93D', '5TQM', 'OLDP', 'EK1M', 'S5ZJ', 'HRXL', 'TDMD', 'J1MC', 'HFG3',
        'Y56Z', '8A38', '9ZN5', 'P5B5', 'LBGB', '283X', 'P9FT', 'ICP0', 'O8L8', 'YEI3',
        '3FQ7', '9UFI', '98T6', 'FVXL', 'QJJ3', 'GQHT', 'SEI6', 'WYKH', 'JA5F', 'AOPS',
        '2L33', '4CL8', 'RME4', 'XEO8', '5EZB', 'QACZ', 'Q661', 'PRLR', 'N8FQ', 'OPGZ',
        'WZDV', 'OLH5', 'OVKB', 'IE79', 'J3GE', 'RUKA', 'SG8G', 'JNVA', 'MW2B', 'BV0D',
        'YEG2', 'QOID', 'NQL3', '4HX6', 'WAWC', 'LAR7', 'L1SX', '8H7Q', 'C09W', '8AWG',
        'PN7V', 'ZPNL', 'BJFD', '93CV', '5OS0', 'K0Z9', 'G5KL', 'J7Y5', 'AHB4', 'EYL4',
        '3UYL', '1JEV', 'Z7U8', 'NZLT', 'MMDG', 'DENO', 'I82H', '45W8', '8H06', 'GW3K',
        'Z3K8', '12ET', '47J5', 'YS1J', 'V0K7', '976U', 'GA3Q', 'D52Y', 'AULL', 'DWDW',
        '1MC6', 'R4AF', 'C65M', '8KDS', 'HKYI', 'LZLK', '4STQ', 'WUOL', 'WSO9', '596B', "FSR5"
    ];

    return (
        <div>
            <EditTeam teams={{ ids, pins }} /> {/* Passing the teams object as a prop */}
        </div>
    );
}
