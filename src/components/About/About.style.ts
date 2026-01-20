export const useStyles = ({
    darkMode
}: {
    darkMode: boolean
}) => ({
    aboutContainer: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#315a75' : '#cce0f0',
        transition: 'background 1s',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
    },
    about: {
        maxWidth: '1600px',
        width: '100%',
        display: 'flex',
        flexDirection: {
            xs: 'column-reverse',
            md: 'row'
        },
        alignItems: 'center',
        justifyContent: 'center',
        padding: {
            xs: '40px 20px',
            md: '80px 40px'
        },
        gap: {
            xs: '40px',
            md: '80px'
        },
        margin: 'auto',
        zIndex: 2,
        flex: 1
    },
    iphoneWrapper: {
        position: 'relative',
        zIndex: 2,
        flexShrink: 0,
        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
    },
    iphoneContent: {
        backgroundColor: '#f0f2f5',
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    linkedInBar: {
        width: '100%',
        position: 'sticky',
        top: '0',
        zIndex: 10
    },
    linkedInButtons: {
        width: '100%',
        marginTop: 'auto'
    },
    aboutTextContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: {
            xs: '100%',
            md: '700px'
        }
    },
    glassCard: {
        background: darkMode
            ? 'rgba(15, 23, 42, 0.6)'
            : 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(40px)',
        borderRadius: '24px',
        border: darkMode
            ? '1px solid rgba(255, 255, 255, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.4)',
        padding: {
            xs: '30px',
            md: '50px'
        },
        boxShadow: darkMode
            ? '0 20px 40px rgba(0, 0, 0, 0.4)'
            : '0 20px 40px rgba(0, 0, 0, 0.05)',
        width: '100%',
        transition: 'all 0.3s ease'
    },
    aboutTitle: {
        fontSize: {
            xs: '2.5rem',
            md: '3.5rem'
        },
        lineHeight: 1.1,
        fontWeight: 800,
        marginBottom: '24px',
        background: darkMode
            ? 'linear-gradient(135deg, #60a5fa 0%, #c084fc 100%)'
            : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em'
    },
    aboutParagraph: {
        fontSize: {
            xs: '1rem',
            md: '1.125rem'
        },
        lineHeight: 1.7,
        color: darkMode ? '#94a3b8' : '#475569',
        fontWeight: 400,
        letterSpacing: '0.01em'
    },
    highlight: {
        color: darkMode ? '#60a5fa' : '#2563eb',
        fontWeight: 600
    }
})