import PlaywrightTest from "https://esm.sh/@playwright/test";
// Select DOM elements
const testDirInput = document.getElementById('testDir');
const fullyParallelCheckbox = document.getElementById('fullyParallel');
const forbidOnlyCheckbox = document.getElementById('forbidOnly');
const globalTimeoutInput = document.getElementById('globalTimeout');
const timeoutInput = document.getElementById('timeout');
const retriesInput = document.getElementById('retries');
const workersInput = document.getElementById('workers');
const grepInput = document.getElementById('grep');
const grepInvertInput = document.getElementById('grepInvert');
const ignoreSnapshotsCheckbox = document.getElementById('ignoreSnapshots');
const updateSnapshotsSelect = document.getElementById('updateSnapshots');
const reporterSelect = document.getElementById('reporter');
const repeatEachInput = document.getElementById('repeatEach');
const maxFailuresInput = document.getElementById('maxFailures');
const outputDirInput = document.getElementById('outputDir');
const preserveOutputSelect = document.getElementById('preserveOutput');
const reportSlowTestsMaxInput = document.getElementById('reportSlowTestsMax');
const reportSlowTestsThresholdInput = document.getElementById('reportSlowTestsThreshold');
const quietCheckbox = document.getElementById('quiet');
const globalSetupInput = document.getElementById('globalSetup');
const globalTeardownInput = document.getElementById('globalTeardown');
const nameInput = document.getElementById('name');
const useBrowserNameSelect = document.getElementById('useBrowserName');
const useIgnoreHTTPSErrorsCheckbox = document.getElementById('useIgnoreHTTPSErrors');
const useViewportWidthInput = document.getElementById('useViewportWidth');
const useViewportHeightInput = document.getElementById('useViewportHeight');
const useTraceSelect = document.getElementById('useTrace');
const useVideoSelect = document.getElementById('useVideo');
const useScreenshotSelect = document.getElementById('useScreenshot');
const useGeolocationLongitudeInput = document.getElementById('useGeolocationLongitude');
const useGeolocationLatitudeInput = document.getElementById('useGeolocationLatitude');
const useLocaleInput = document.getElementById('useLocale');
const useTimezoneIdInput = document.getElementById('useTimezoneId');
const useExtraHTTPHeadersTextarea = document.getElementById('useExtraHTTPHeaders');
const useJavaScriptEnabledCheckbox = document.getElementById('useJavaScriptEnabled');
const useHasTouchCheckbox = document.getElementById('useHasTouch');
const useUserAgentInput = document.getElementById('useUserAgent');
const useAcceptDownloadsCheckbox = document.getElementById('useAcceptDownloads');
const shardTotalInput = document.getElementById('shardTotal');
const shardCurrentInput = document.getElementById('shardCurrent');
const expectTimeoutInput = document.getElementById('expectTimeout');
const expectToMatchSnapshotThresholdInput = document.getElementById('expectToMatchSnapshotThreshold');
const expectToMatchSnapshotMaxDiffPixelsInput = document.getElementById('expectToMatchSnapshotMaxDiffPixels');
const expectToMatchSnapshotMaxDiffPixelRatioInput = document.getElementById(
    'expectToMatchSnapshotMaxDiffPixelRatio'
);
const expectToHaveScreenshotAnimationsSelect = document.getElementById('expectToHaveScreenshotAnimations');
const expectToHaveScreenshotCaretSelect = document.getElementById('expectToHaveScreenshotCaret');
const expectToHaveScreenshotScaleSelect = document.getElementById('expectToHaveScreenshotScale');
const expectToHaveScreenshotThresholdInput = document.getElementById('expectToHaveScreenshotThreshold');
const expectToPassTimeoutInput = document.getElementById('expectToPassTimeout');
const expectToPassIntervalsTextarea = document.getElementById('expectToPassIntervals');
const resetButton = document.getElementById('resetButton');
const generateButton = document.getElementById('generateButton');
const configPreview = document.getElementById('configPreview');
const configCode = document.getElementById('configCode');
const downloadButton = document.getElementById('downloadButton');
const historyList = document.getElementById('historyList');


// Function: Generate playwright.config.ts code
function generateConfigCode() {
    const config = {
        testDir: testDirInput.value,
        fullyParallel: fullyParallelCheckbox.checked,
        forbidOnly: forbidOnlyCheckbox.checked,
        globalTimeout: parseInt(globalTimeoutInput.value),
        timeout: parseInt(timeoutInput.value),
        retries: parseInt(retriesInput.value),
        workers: workersInput.value ? parseInt(workersInput.value) : undefined,
        grep: grepInput.value ? new RegExp(grepInput.value) : undefined,
        grepInvert: grepInvertInput.value ? new RegExp(grepInvertInput.value) : undefined,
        ignoreSnapshots: ignoreSnapshotsCheckbox.checked,
        updateSnapshots: updateSnapshotsSelect.value,
        reporter: reporterSelect.value,
        repeatEach: parseInt(repeatEachInput.value),
        maxFailures: parseInt(maxFailuresInput.value),
        outputDir: outputDirInput.value,
        preserveOutput: preserveOutputSelect.value,
        reportSlowTests: {
            max: parseInt(reportSlowTestsMaxInput.value),
            threshold: parseInt(reportSlowTestsThresholdInput.value),
        },
        quiet: quietCheckbox.checked,
        globalSetup: globalSetupInput.value || undefined, // Set to undefined if value is empty string
        globalTeardown: globalTeardownInput.value || undefined, // Set to undefined if value is empty string
        name: nameInput.value,
        use: {
            browserName: useBrowserNameSelect.value,
            ignoreHTTPSErrors: useIgnoreHTTPSErrorsCheckbox.checked,
            viewport: {
                width: parseInt(useViewportWidthInput.value),
                height: parseInt(useViewportHeightInput.value),
            },
            trace: useTraceSelect.value,
            video: useVideoSelect.value,
            screenshot: useScreenshotSelect.value,
            geolocation: useGeolocationLongitudeInput.value && useGeolocationLatitudeInput.value
                ? {
                    longitude: parseFloat(useGeolocationLongitudeInput.value),
                    latitude: parseFloat(useGeolocationLatitudeInput.value),
                }
                : undefined,
            locale: useLocaleInput.value,
            timezoneId: useTimezoneIdInput.value,
            extraHTTPHeaders: useExtraHTTPHeadersTextarea.value
                ? JSON.parse(useExtraHTTPHeadersTextarea.value)
                : undefined,
            javaScriptEnabled: useJavaScriptEnabledCheckbox.checked,
            hasTouch: useHasTouchCheckbox.checked,
            userAgent: useUserAgentInput.value || undefined, // Set to undefined if value is empty string
            acceptDownloads: useAcceptDownloadsCheckbox.checked,
        },
        projects: [
            {
                name: 'chromium',
                use: { ...devices['Desktop Chrome'] },
            },
            {
                name: 'firefox',
                use: { ...devices['Desktop Firefox'] },
            },
            {
                name: 'webkit',
                use: { ...devices['Desktop Safari'] },
            },
        ],
        respectGitIgnore: true,
        updateSnapshots: updateSnapshotsSelect.value,
        shard: shardTotalInput.value && shardCurrentInput.value
            ? {
                total: parseInt(shardTotalInput.value),
                current: parseInt(shardCurrentInput.value),
            }
            : undefined,
        expect: {
            timeout: parseInt(expectTimeoutInput.value),
            toMatchSnapshot: {
                threshold: parseFloat(expectToMatchSnapshotThresholdInput.value),
                maxDiffPixels: parseInt(expectToMatchSnapshotMaxDiffPixelsInput.value),
                maxDiffPixelRatio: parseFloat(expectToMatchSnapshotMaxDiffPixelRatioInput.value),
            },
            toHaveScreenshot: {
                animations: expectToHaveScreenshotAnimationsSelect.value,
                caret: expectToHaveScreenshotCaretSelect.value,
                scale: expectToHaveScreenshotScaleSelect.value,
                threshold: parseFloat(expectToHaveScreenshotThresholdInput.value),
            },
            toPass: {
                timeout: parseInt(expectToPassTimeoutInput.value),
                intervals: expectToPassIntervalsTextarea.value
                    ? JSON.parse(expectToPassIntervalsTextarea.value)
                    : undefined,
            },
        },
    };

    let code = `import { defineConfig, devices } from '@playwright/test';\n\n`;
    code += `export default defineConfig({\n`;
    for (const key in config) {
        if (config[key] !== undefined) {
            if (typeof config[key] === 'object') {
                code += `  ${key}: ${JSON.stringify(config[key], null, 2)},\n`;
            } else {
                code += `  ${key}: ${JSON.stringify(config[key])},\n`;
            }
        }
    }
    code += `});\n`;

    return code;
}

// Function: Show configuration preview
function showConfigPreview(code) {
    configCode.textContent = code;
    configPreview.style.display = 'block';
    downloadButton.style.display = 'block';
}

// Function: Download configuration file
function downloadConfigFile(code) {
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playwright.config.ts';
    a.click();
    URL.revokeObjectURL(url);
}

// Function: Save history
function saveHistory(code) {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(code);
    localStorage.setItem('history', JSON.stringify(history));
    updateHistoryList();
}

// Function: Update history list
function updateHistoryList() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = '';
    history.forEach((code, index) => {
        const li = document.createElement('li');
        li.textContent = `Record ${index + 1}`;
        li.addEventListener('click', () => {
            showConfigPreview(code);
        });
        historyList.appendChild(li);
    });
}

// Function: Reset configuration
function resetConfig() {
    // Reset all form fields to default values
    testDirInput.value = './tests';
    fullyParallelCheckbox.checked = true;
    forbidOnlyCheckbox.checked = false;
    globalTimeoutInput.value = '0';
    timeoutInput.value = '30000';
    retriesInput.value = '0';
    workersInput.value = ''; // Default value is undefined
    grepInput.value = '';
    grepInvertInput.value = '';
    ignoreSnapshotsCheckbox.checked = false;
    updateSnapshotsSelect.value = 'missing';
    reporterSelect.value = 'html';
    repeatEachInput.value = '1';
    maxFailuresInput.value = '0';
    outputDirInput.value = 'test-results';
    preserveOutputSelect.value = 'always';
    reportSlowTestsMaxInput.value = '5';
    reportSlowTestsThresholdInput.value = '15000';
    quietCheckbox.checked = false;
    globalSetupInput.value = '';
    globalTeardownInput.value = '';
    nameInput.value = 'My Test Suite';
    useBrowserNameSelect.value = 'chromium';
    useIgnoreHTTPSErrorsCheckbox.checked = true;
    useViewportWidthInput.value = '1280';
    useViewportHeightInput.value = '720';
    useTraceSelect.value = 'on-first-retry';
    useVideoSelect.value = 'off';
    useScreenshotSelect.value = 'only-on-failure';
    useGeolocationLongitudeInput.value = '12.492507';
    useGeolocationLatitudeInput.value = '41.889938';
    useLocaleInput.value = 'en-US';
    useTimezoneIdInput.value = 'America/New_York';
    useExtraHTTPHeadersTextarea.value = `{
  "Accept-Language": "en-US"
}`;
    useJavaScriptEnabledCheckbox.checked = true;
    useHasTouchCheckbox.checked = false;
    useUserAgentInput.value = '';
    useAcceptDownloadsCheckbox.checked = true;
    shardTotalInput.value = '';
    shardCurrentInput.value = '';
    expectTimeoutInput.value = '5000';
    expectToMatchSnapshotThresholdInput.value = '0.2';
    expectToMatchSnapshotMaxDiffPixelsInput.value = '10';
    expectToMatchSnapshotMaxDiffPixelRatioInput.value = '0.1';
    expectToHaveScreenshotAnimationsSelect.value = 'disabled';
    expectToHaveScreenshotCaretSelect.value = 'hide';
    expectToHaveScreenshotScaleSelect.value = 'css';
    expectToHaveScreenshotThresholdInput.value = '0.2';
    expectToPassTimeoutInput.value = '5000';
    expectToPassIntervalsTextarea.value = '[100, 250, 500, 1000]';

    // Hide configuration preview
    configPreview.style.display = 'none';
    downloadButton.style.display = 'none';
}

// Event listener: Generate configuration button
generateButton.addEventListener('click', () => {
    const code = generateConfigCode();
    showConfigPreview(code);
    saveHistory(code);
});

// Event listener: Download configuration button
downloadButton.addEventListener('click', () => {
    downloadConfigFile(configCode.textContent);
});

// Event listener: Reset configuration button
resetButton.addEventListener('click', resetConfig);

// Initialization: Load history
updateHistoryList();
